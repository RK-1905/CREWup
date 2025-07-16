export default function SubmitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-6 py-3 px-6 bg-pink-600 hover:bg-pink-700 transition-all text-white rounded-xl shadow-xl text-lg font-bold tracking-wide"
    >
      🚀 Launch Contest
    </button>
  );
}
