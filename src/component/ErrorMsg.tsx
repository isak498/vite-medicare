interface Props {
  message?: string;
  className?: string;
}

const ErrorMsg = ({ message, className = "" }: Props) => {
  if (!message) return null;

  return (
    <p className={`text-red-500 text-xs font-medium mt-1  ${className}`}>
      {message}
    </p>
  );
};

export default ErrorMsg;
