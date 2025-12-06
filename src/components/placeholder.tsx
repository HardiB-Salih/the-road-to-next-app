type PlaceholderProps = {
  lable: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ lable }) => {
  return <h2 className="text-center text-lg">{lable}</h2>;
};

export default Placeholder;
