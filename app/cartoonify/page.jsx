import CloudinaryWrapper from "@/app/components/CloudinaryWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Regular Image </h1>
        <CloudinaryWrapper
          cartoonify
          width="900"
          height="500"
          src="https://res.cloudinary.com/do49htzms/image/upload/v1710360452/l9uovdmzefl94ahljmsm.jpg"
          sizes="100vw"
          alt="Cartoon"
          className="rounded-lg"
        />
      </div>
    </main>
  );
}
