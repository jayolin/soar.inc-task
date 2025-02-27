interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  return (
    <div
      className={`w-8 h-8 rounded-full bg-gray-300 bg-[url(${src})] bg-cover`}
    ></div>
  );
};

export default Avatar;

