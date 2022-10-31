const Button = ({ text, clickhandler, inactive = false }) => {
  return (
    <button className={`${inactive ? 'bg-black/60' : 'bg-primary hover:bg-secondary'} text-white p-3
    rounded-full flex items-center hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150`}
      onClick={clickhandler} disabled={inactive}
    >
      {text}
    </button>
  )
}

export default Button