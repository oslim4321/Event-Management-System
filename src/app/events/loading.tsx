import Spinner from "@/components/Spinner";

const Loading = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2>
          <Spinner loading />
        </h2>
      </div>
    </section>
  );
};

export default Loading;
