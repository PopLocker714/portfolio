export default function Page({ params }: { params: { project: string } }) {
  return (
    <div className="container">
      <p
        className="py-28"
        dangerouslySetInnerHTML={{ __html: params.project }}
      ></p>
    </div>
  );
}
