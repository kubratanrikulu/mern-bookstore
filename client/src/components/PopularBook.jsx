import BookCard from "./BookCard"

const PopularBook = () => {
    return (
        <div className="popular-book bg-[#ebe9eb] flex flex-col gap-y-8 pt-5">
            <h1 className="text-center">Popular Book</h1>
            <BookCard />
        </div>
    )
}

export default PopularBook