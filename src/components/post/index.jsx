import {ChosenIcon} from '../../assets/icons'

const index = ({
  flexDirection,
  post,
}) => {
  const{title,description,img,authorName,authorImg,postedAt,} = post
  return (
    <div
      className={`bg-white flex ${flexDirection} gap-[10px] p-[10px] rounded-[12px] shadow-[0px_0px_32px_rgba(0,0,0,0.07)] text-black hover:shadow-lg duration-300 cursor-pointer`}
    >
      <div className="w-[100%] rounded-md overflow-hidden bg-slate-500">
        <img src={img} alt="post Image" className="w-full h-full" />
      </div>
      <div className="w-[100%] flex flex-col justify-between gap-3">
        <h1 className="text-base font-medium overflow-hidden [display:_-webkit-box] [-webkit-box-orient:_vertical] [-webkit-line-clamp:_1]">
          {title}
        </h1>
        <p className="text-[14px] leading-[143%] font-normal text-black/75 overflow-hidden [display:_-webkit-box] [-webkit-box-orient:_vertical] [-webkit-line-clamp:_2]">
          {description}
        </p>
        <div className="flex gap-2 py-[13px] px-[16px] rounded-[12px] bg-gray items-center">
          <div className="overflow-hidden bg-orange-600 rounded-[12px]">
            <img src={authorImg} alt="author pic" className="w-full h-full" />
          </div>
          <div className="w-[100%]">
            <h3 className="text-sm leading-[150%]">{authorName}</h3>
            <p className="text-xs leading-[150%] text-black/75">{postedAt}</p>
          </div>
          <div className=""><ChosenIcon styles='fill-black/50 hover:fill-primary cursor-pointer duration-300'/></div>
        </div>
      </div>
    </div>
  );
};

export default index