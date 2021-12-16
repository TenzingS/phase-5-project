// import React from 'react';
// import { useState } from 'react';
// import { useHistory } from 'react-router';

// const Newcomment = () => {
//     const [newComment, setNewComment] = useState('')

//     function handleNewComment(e){
//         setNewComment(e.target.value) 
//     }

//     let history = useHistory();

//     function handleSubmit(e){
//         e.preventDefault();
//         fetch('/comments', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newComment)
//         })
//         history.push('/home')
//     }

//     function cancelPost(){
//         history.push('/home')
//     }

//     return (
//         <div>
//             <label>Add a new comment:</label>
//             <form onSubmit={handleSubmit} >
//                 <textarea placeholder="Put comment here..." onChange={handleNewComment} />
//                 <div>
//                     <input type="submit" value="Post"/>
//                     <button onClick={cancelPost} >Cancel</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Newcomment;
