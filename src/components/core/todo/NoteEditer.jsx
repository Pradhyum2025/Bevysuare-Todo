'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaBold, FaItalic } from "react-icons/fa";
import { MdFormatAlignCenter } from "react-icons/md";
import { CiTextAlignLeft, CiTextAlignRight } from "react-icons/ci";
import { AiOutlineUnderline } from "react-icons/ai";
import { deleteTodo, updateTodo } from '@/library';
import { IoCloudDoneOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import debounce from 'lodash.debounce'; 

const NoteEditor = ({ todo }) => {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(todo?.title || `Todo${todo._id.substring(0,5)}`);
  const [content, setContent] = useState(todo?.description || "");
  const contentRef = useRef(null);
  const hasInitialized = useRef(false);

  // Initialize content HTML only once
  useEffect(() => {
    if (contentRef.current && !hasInitialized.current) {
      contentRef.current.innerHTML = content;
      hasInitialized.current = true;
    }
  }, [content]);

  // Debounced autosave
  const handleAutoSave = useCallback(() => {
    if (!todo?._id || !title || !content) return;

    updateTodo(dispatch, router, todo._id, setSaving, { title, description: content });

  }, [title, content, todo?._id, dispatch, router]);

  const debouncedAutoSave = useCallback(debounce(handleAutoSave, 1000), [handleAutoSave]);

  useEffect(() => {
    debouncedAutoSave();
    return debouncedAutoSave.cancel;
  }, [title, content, debouncedAutoSave]);

  const applyFormat = (cmd) => {
    document.execCommand(cmd, false, null);
    contentRef.current.focus();
  };

  const handleInput = () => {
    const text = contentRef.current.innerHTML;
    setContent(text);
  };

  const handleDeleteTodo = async (todoId) => {
    return deleteTodo(dispatch, router, todoId);
  };
  return (
    <div className="bg-white px-6 py-2  rounded shadow-lg max-w-4xl mx-auto relative w-full">
       
       {/* Auto Save */}
      <div className='my-2'>
        {saving ?
          <div role="status">
            <svg aria-hidden="true" className="w-[20px] h-[20px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          :
          <IoCloudDoneOutline className='text-xl font-bold' />
        }
      </div>

      <input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="text-2xl font-bold w-full mb-4 outline-none"
      />

      {/* Toolbar */}
      <div className="flex gap-4 border-b pb-2 mb-4 text-lg">
        <button onClick={() => applyFormat('bold')} className="bg-gray-100 p-1 rounded hover:bg-gray-200"><FaBold /></button>
        <button onClick={() => applyFormat('italic')} className="bg-gray-100 p-1 rounded hover:bg-gray-200"><FaItalic /></button>
        <button onClick={() => applyFormat('underline')} className="bg-gray-100 p-1 rounded hover:bg-gray-200"><AiOutlineUnderline /></button>
        <button onClick={() => applyFormat('justifyLeft')} className="bg-gray-100 p-1 rounded hover:bg-gray-200"><CiTextAlignLeft /></button>
        <button onClick={() => applyFormat('justifyCenter')} className="bg-gray-100 p-1 rounded hover:bg-gray-200"><MdFormatAlignCenter /></button>
        <button onClick={() => applyFormat('justifyRight')} className="bg-gray-100 p-1 rounded hover:bg-gray-200"><CiTextAlignRight /></button>
      </div>

      {/* Content Editable Area */}
      <div
        contentEditable
        ref={contentRef}
        onInput={handleInput}
        className="py-4 min-h-[10.5rem] rounded text-gray-700 outline-none text-[18px] font-[400]"
        suppressContentEditableWarning
      />


      <div
        onClick={() => handleDeleteTodo(todo._id)}
        className="absolute top-6 right-6 text-gray-500 hover:text-red-500 cursor-pointer"
      >
        <RiDeleteBinLine />
      </div>
    </div>
  );
};

export default NoteEditor;
