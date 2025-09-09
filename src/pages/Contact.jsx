export default function Contact() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">Contact</h1>
            <form className="space-y-4 max-w-md">
                <input className="w-full p-3 border rounded" placeholder="Your name" />
                <input className="w-full p-3 border rounded" placeholder="Your email" />
                <textarea className="w-full p-3 border rounded" rows={4} placeholder="Message" />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
            </form>
        </div>
    );
}
