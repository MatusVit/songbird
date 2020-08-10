import React from "react";
import { /*connect,*/ useDispatch } from "react-redux";
import { nextStep } from "../redux/actions";

const ButtonNext = () => {
  const dispatch = useDispatch();

  return (
    <section className="button-next my-3">
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-outline-secondary btn-block"
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
