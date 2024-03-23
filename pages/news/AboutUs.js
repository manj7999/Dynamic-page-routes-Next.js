import { useRouter } from 'next/router';

const AboutUs = ({ member }) => {
  const router = useRouter();

  // Check if member exists
  if (!member) {
    return <p>Developer doesn't exist.</p>;
  }

  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Hard coded list of IDs
  const teamDetails = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

  // Fetch data from external API
  const { id } = context.query;
  const member = teamDetails.find(member => member.id === parseInt(id));

  if (!member) {
    // Return null if member is not found
    return {
      props: {
        member: null
      }
    };
  }

  return {
    props: {
      member
    }
  };
}

export default AboutUs;