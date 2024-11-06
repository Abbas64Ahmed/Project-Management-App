import { forwardRef, useImperativeHandle, useRef } from "react";

const Alert = forwardRef(function Alert({}, ref) {
  let dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="alert">
      <h1>Invalid Input</h1>
      <p>Oops ... looks like you forgot to enter a value.</p>
      <p>Please make sure you provide a valid value for every input field.</p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
});

export default Alert;
