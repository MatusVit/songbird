import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../redux/actions";

const ButtonNext = () => {
  const dispatch = useDispatch();
  const { isCorrectAnswer } = useSelector((state) => state);

  return (
    <section className="button-next my-3">
      <div className="row">
        <div className="col">
          <button
            type="button"
            className={`btn btn-outline-secondary btn-block ${
              isCorrectAnswer ? "active" : ""
            }`}
            disabled={!isCorrectAnswer}
            onClick={() => dispatch(nextStep())}
          >
            Next Level
          </button>
        </div>
      </div>
    </section>
  );
};

// const mapDispatchToProps = {
//   nextStep,
// };

// export default connect(null, mapDispatchToProps)(ButtonNext);
export default ButtonNext;
