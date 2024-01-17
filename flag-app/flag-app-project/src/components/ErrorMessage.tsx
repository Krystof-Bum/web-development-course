interface Props {
  searchInput: string;
}

const ErrorMessage = ({ searchInput }: Props) => {
  return (
    <p>
      No country matched with:
      <span className="font-semibold">{searchInput}</span>
    </p>
  );
};

export default ErrorMessage;
