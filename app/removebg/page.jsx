import CloudinaryWrapper from "../components/cloudinarywrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Regular Image </h1>
        <CloudinaryWrapper
          removeBackground
          width="900"
          height="500"
          src="https://res.cloudinary.com/do49htzms/image/upload/v1710355546/cld-sample.jpg"
          sizes="100vw"
          alt="no background reindeer"
          className="rounded-lg"
        />
      </div>
    </main>
  );
}
