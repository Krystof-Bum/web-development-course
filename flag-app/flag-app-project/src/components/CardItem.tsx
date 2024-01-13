interface Props {
  title: string;
  value: string;
}

const CardItem = ({ title, value }: Props) => {
  return (
    <>
      <p className="text-sm">
        <span className="font-semibold text-sm">{title}: </span>
        {value}
      </p>
    </>
  );
};

export default CardItem;
