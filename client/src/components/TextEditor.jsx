import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';    
import {io} from "socket.io-client";


// options for the ReactQuill component
const TOOLBAR_OPTIONS = {
    toolbar: [
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{font: []}],
        [{list: "ordered"}, {list: "bullet"}],
        ["bold", "italic", "underline"],
        [{color: []}, {background: []}],
        [{script: "sub"}, {script: "super"}],
        [{align: []}],
        ["image", "blockquote", "code-block"],
        ["clean"]
    ]
}


// Component
const TextEditor = () => {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  
  const editor = useRef();


  function handleOnChange(delta, source) {
    if (source != "user") return;
    setQuill(delta);
  }

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);
  return () => {
    s.disconnect();
  }
  }, [])

  useEffect(() => {
    if (!socket || !quill) return;
    socket.emit("send-changes", JSON.stringify(quill));
  }, [quill, socket])
  

  useEffect(() => {
    if(!socket) return;
    socket.on("receive-changes", update => {
      update = JSON.parse(update);

      editor.current.getEditor().updateContents(update);
    });

    return () => {socket.off("receive-changes");}
  }, [socket])

  

  return (
    <div id="container">
      <ReactQuill 
        ref={editor}
        onChange={(content, delta, source) => {
          console.log(editor.current);
          handleOnChange(delta, source);
        }}
        modules= {TOOLBAR_OPTIONS} 
        theme= "snow" 
      />
    </div>
  )
}

export default TextEditor