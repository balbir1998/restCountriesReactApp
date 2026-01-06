const CardsShimmerEffect = () => {
    return (
        <>
            {
                Array.from({ length: 10 }).map((el, idx) => {
                    return (
                        <div key={idx} className="bg-(--shimmer-color) flex flex-col justify-between rounded-lg shadow-[0_2px_4px_#0000001a] animate-pulse">
                            <div className="p-2 w-full">
                                <div className="rounded-lg h-40 w-full bg-gray-400" />
                            </div>
                            <div className="px-4 pb-6 *:bg-gray-400 *:w-full [&>*+*]:h-5 [&>*+*]:my-2 *:rounded-xs">
                                <h3 className="my-4 h-6 max-w-30"></h3>
                                <p className="max-w-35"></p>
                                <p className="max-w-25"></p>
                                <p className="max-w-28"></p>
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
}

export default CardsShimmerEffect;