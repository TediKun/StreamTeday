
const Contact = () => {
  return (
    <section className="w-full mt-1.5 px-2">
      <h2 className="text-heading">Contact Me</h2>
      <form action="" className="mt-1.5">
        <label htmlFor="username" className="block font-semibold">Name:
          <input type="text" id="username" className="outline-none border block w-10/12 rounded text-sm bg-slate-700 px-2 py-2 border-primary/60" placeholder="Typing Your Name..." />
        </label>
        <label htmlFor="message" className="block font-semibold">Message:
          <textarea id="message" className="outline-none resize-none h-28 border block w-10/12 rounded text-sm bg-slate-700 px-2 py-2 border-primary/60" placeholder="Message..." />
        </label>
        <button className="mt-1 btn-primary">Submit</button>
      </form>
    </section>
  )
}

export default Contact
