import '../../styles/loader.css';

interface IProps {
  className?: string;
}

const Loader = ({ className }: IProps) => {
  return (
    <section className="dots-container ">
      <div
        className={`dot ${className ? className : 'border-[#0055ff]'}`}
      ></div>
      <div
        className={`dot ${className ? className : 'border-[#0055ff]'}`}
      ></div>
      <div
        className={`dot ${className ? className : 'border-[#0055ff]'}`}
      ></div>
    </section>
  );
};

export default Loader;
