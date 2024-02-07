interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className="text-error">{message}</p>;
};

export default ErrorMessage;
