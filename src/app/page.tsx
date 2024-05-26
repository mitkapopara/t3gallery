import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/28bb1b06-42d9-4a78-ab9c-b8662c2278d5-qbczsx.png",
  "https://utfs.io/f/1e85b604-9ffa-4f02-a378-82e08c83590f-dg8kr7.png",
  "https://utfs.io/f/c8bf6b76-2136-41da-98bc-29909c484c05-9c8cw0.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
