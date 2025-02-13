export default function Card(props) {

    return (
        <div className="p-6 m-1 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="tracking-tight font-thin text-gray-500">{props.name}</h5>
            </a>
            <p className=" font-bold text-gray-700 dark:text-gray-400">{props.count}</p>
        </div>
    );


}