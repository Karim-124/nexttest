export const metadata = {
    title: "article page"
}
export default function ({ children }) {
    return (
        <div >
            <h1>Articles</h1>
            <div className=" bg-teal-800 mx-5 mt-20 p-10 rounded-lg text-white text-3xl">
                {children}
            </div>
        </div>
    )
}