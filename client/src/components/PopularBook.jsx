import BookCard from "./BookCard"

const PopularBook = () => {
    return (
        <div className="container mx-auto flex flex-col gap-y-8 pt-5 py-10">
            <h1 className="text-center font-serif text-h1Color font-semibold text-4xl">Popular Book</h1>
            <BookCard />
        </div>
    )
}

export default PopularBook