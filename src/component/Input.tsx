interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    labelName: string;
}

const Input = ({
    labelName,
    ...rest
}: Props) => {


    return (
        <div className="flex flex-col gap-2">

            <label className="text-black font-semibold "> {labelName}</label>
            <input
                className="border border-gray-300 rounded-md px-3 py-2 focus:border-primary focus:outline-none"
                {...rest}
            />
        </div>

    );
}

export default Input;