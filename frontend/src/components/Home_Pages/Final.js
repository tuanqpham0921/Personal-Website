import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineFile, AiOutlinePushpin } from "react-icons/ai";

const Final = () => {
  return (
    <>
      <div>
        <p>
          <a
            href="https://www.tuanqpham0921.com/_files/ugd/98eae2_955235f2d47c403698b1e540792b9c23.pdf"
            style={{ fontSize: "2em", color: "black" }}>
            {'Resume'} <AiOutlineFile />
          </a>
        </p>

        <p>
          <a
            href="https://github.com/tuanqpham0921"
            style={{ fontSize: "2em", color: "black" }}>
            {`GitHub `} <AiFillGithub />
          </a>
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/tuanqpham0921/"
            style={{ fontSize: "2em", color: "black"  }}>
            {`LinkedIn `} <AiFillLinkedin />
          </a>
        </p>

        <p style={{ fontSize: "2em", color: "black" }}>
          tuanqpham0921@gmail.com <AiOutlineMail />
        </p>

        <p style={{ fontSize: "2em", color: "black" }}>
          512-971-8538 <AiOutlinePhone />
        </p>

        <p style={{ fontSize: "2em", color: "black" }}>
          Austin, Texas <AiOutlinePushpin />
        </p>

      </div>
    </>
  );
};

export default Final;
