const Close = () => {
  return (
    <button className="relative z-50 px-6 p-6 bg-slate-200 bg-opacity-50 rounded-md">
      <div className="w-8 h-1 bg-white animate-pulse -translate-x-1/2 absolute rotate-45"></div>
      <div className="w-8 h-1 bg-white animate-pulse -translate-x-1/2 absolute -rotate-45"></div>
    </button>
  )
}

export default Close