function AddPostButton({ type, title, onSubmit }) {
  return (
    <div>
      <button type={type} onSubmit={onSubmit}>
        {title}
      </button>
    </div>
  );
}

export default AddPostButton;
