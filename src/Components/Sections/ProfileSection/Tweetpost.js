// import React from "react";
// import { useRecoilValue } from "recoil";
// import { userTweet } from "../../../Recoil/Atom1/Atom";
// import { Avatar } from "@mui/material";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import SyncIcon from "@mui/icons-material/Sync";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import PollIcon from "@mui/icons-material/Poll";
// import UploadIcon from "@mui/icons-material/Upload";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import style2 from "./Tweetpost.module.css";
// // import CustomButton from '../../../Atom/Button/CustomButton';
// function Tweetpost() {
//   const tweetPostData = useRecoilValue(userTweet);
//   return (
//     <>
//       <div className={style2.wrapper}>
//         <div className={style2.container1}>
//           <div>
//             <Avatar className={style2.avatar} src={tweetPostData.tweetPic} />
//           </div>

//           <div className={style2.innercontainer}>
//             <span className={style2.text}>
//               <h3>
//                 {tweetPostData.name}
//                 <VerifiedIcon style={{ color: "blue" }} />
//               </h3>
//             </span>
//             <p>{tweetPostData.tweetText}</p>
//           </div>
//         </div>

//         <div className={style2.img}>
//           <img
//             style={{ width: "30rem", height: "30rem", borderRadius: "15px" }}
//             alt="picture"
//             src={tweetPostData.tweetPic}
//           />
//         </div>
//         <div className={style2.icons}>
//           <span>
//             {tweetPostData.tweetCount}
//             <ChatBubbleOutlineIcon />
//           </span>
//           <span>
//             {tweetPostData.retweetCount}
//             <SyncIcon />
//           </span>
//           <span>
//             {tweetPostData.likesCount}
//             <FavoriteBorderIcon />
//           </span>
//           <span>
//             {tweetPostData.viewsCount}
//             <PollIcon />
//           </span>

//           <UploadIcon />
//         </div>
//       </div>
//       <div className={style2.wrapper}>
//         <div className={style2.container1}>
//           <div>
//             <Avatar
//               className={style2.avatar}
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg"
//             />
//           </div>

//           <div className={style2.innercontainer}>
//             <span className={style2.text}>
//               <h3>
//                 Elon Musk
//                 <VerifiedIcon style={{ color: "blue" }} />
//               </h3>
//             </span>
//             <p>{tweetPostData.tweetText}</p>
//           </div>
//         </div>
//         <div className={style2.icons}>
//           <span>
//             {tweetPostData.tweetCount}
//             <ChatBubbleOutlineIcon />
//           </span>
//           <span>
//             {tweetPostData.retweetCount}
//             <SyncIcon />
//           </span>
//           <span>
//             {tweetPostData.likesCount}
//             <FavoriteBorderIcon />
//           </span>
//           <span>
//             {tweetPostData.viewsCount}
//             <PollIcon />
//           </span>
//           <UploadIcon />
//         </div>
//       </div>
//       <div className={style2.wrapper}>
//         <div className={style2.container1}>
//           <div>
//             <Avatar
//               className={style2.avatar}
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/800px-Steve_Jobs_Headshot_2010-CROP2.jpg"
//             />
//           </div>

//           <div className={style2.innercontainer}>
//             <span className={style2.text}>
//               <h3>
//                 Steve Jobs
//                 <VerifiedIcon style={{ color: "blue" }} />
//               </h3>
//             </span>
//             <p>{tweetPostData.tweetText}</p>
//           </div>
//         </div>
//         <div className={style2.icons}>
//           <span>
//             {tweetPostData.tweetCount}
//             <ChatBubbleOutlineIcon />
//           </span>
//           <span>
//             {tweetPostData.retweetCount}
//             <SyncIcon />
//           </span>
//           <span>
//             {tweetPostData.likesCount}
//             <FavoriteBorderIcon />
//           </span>
//           <span>
//             {tweetPostData.viewsCount}
//             <PollIcon />
//           </span>
//           <UploadIcon />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Tweetpost;
