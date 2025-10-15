function ButtonQuantityProduct() {
    return (
    <div className="flex items-center justify-center gap-4 ">
      <button
       
        className=" cursor-pointer border-2 border-yellow-500 text-yellow-500 rounded-xl w-7 h-7 flex items-center justify-center text-xl font-bold hover:bg-yellow-500 hover:text-black transition"
      >
        −
      </button>

      <span className="text-xs font-semibold">1</span>

      <button
        
        className="border-2 cursor-pointer border-yellow-500 text-yellow-500 rounded-xl w-7 h-7 flex items-center justify-center text-x1 font-bold hover:bg-yellow-500 hover:text-black transition"
      >
        +
      </button>
    </div>
  );
}

export default ButtonQuantityProduct