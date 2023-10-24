export default function Page({ params }: { params: { post: string } }) {
  return <div className="py-28 text-secondary">My Post: {params.post}</div>;
}
