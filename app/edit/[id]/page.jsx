import EditProjectForm from "@/components/EditProjectForm";

const getProjectById = async (id) => {
  try {
    const apiurl = process.env.API_URL;
      const res = await fetch(`${apiurl}/api/projects/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Edit({ params }) {
  const { id } = params;
  const { project } = await getProjectById(id);
  const { title, discription } = project;

  return <EditProjectForm id={id} title={title} discription={discription} />;
}




