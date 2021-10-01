// import React from 'react';
// import { useState } from 'react';
// import { useHistory } from 'react-router';

// const EditPost = ({post, handleEdit}) => {

//     let history = useHistory();

//     const [editHeader, setEditHeader] = useState('')
//     const [editBody, setEditBody] = useState('')

//     function handleEditHeader(e){
//         setEditHeader(e.target.value)
//       }
    
//       function handleEditBody(e){
//         setEditBody(e.target.value)
//       }


//     function handleEdits(e){
//         e.preventDefault();
//         fetch(`/posts/${post.id}`,
//         {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json'
//             },
//             body: JSON.stringify({
//                 header: editHeader,
//                 body: editBody
//             })
//         })
//         .then(r => r.json())
//         .then(edits => handleEdit(edits))
//         history.push('/home')
//     }

//     return (
        
//             <form className="note-editor" onSubmit={handleEdits} >
//                 <input placeholder="Put header here..." onChange={handleEditHeader} value={editHeader} />
//                 <textarea placeholder="Put body here..." onChange={handleEditBody} value={editBody} />
//                 <div className="button-row">
//                     <input className="button" type="submit" value="Submit edit" />
//                 </div>
//             </form>
//     );
// }

// export default EditPost;
