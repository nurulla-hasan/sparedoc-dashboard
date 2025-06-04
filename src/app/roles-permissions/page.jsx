import PageContainer from '@/components/container/PageContainer';

const RolesPermissionsPage = () => {
  return (
    <PageContainer>
      <div className="p-4 bg-white min-h-[85vh] flex flex-col justify-center items-center text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Admin Roles & Permissions</h2>
        <p className="text-lg text-center">
          This section will allow you to manage different admin roles and their permissions within the system.
        </p>
        <p className="text-md text-center mt-2">
          (Feature coming soon!)
        </p>
      </div>
    </PageContainer>
  );
};

export default RolesPermissionsPage;