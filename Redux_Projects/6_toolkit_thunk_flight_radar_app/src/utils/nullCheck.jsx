import { MdOutlineQuestionMark } from "react-icons/md";

const nullCheck = (value) => {
    return value || <MdOutlineQuestionMark className="q-mark" />
};

export default nullCheck;