
export const Appbar = () => {
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            Blood Bank
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello {localStorage.getItem("firstName")+" "+localStorage.getItem("lastName")}
            </div>
        </div>
    </div>
}