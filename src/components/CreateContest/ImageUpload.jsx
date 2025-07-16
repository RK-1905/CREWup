export default function ImageUpload({ image, setImage }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm text-white/80">Poster Image</label>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {image && (
        <img
          src={image}
          alt="Preview"
          className="w-full rounded-xl mt-3 border border-white/10 max-h-48 object-cover"
        />
      )}
    </div>
  );
}
