import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import SushiBlock from '@/components/Sushi/SushiBlock';
import SushiBlockError from '@/components/Sushi/SushiBlockError';
import SushiBlockLoading from '@/components/Sushi/SushiBlockLoading';
import { useGetSushiByIdQuery } from '@/services/sushi.service';

const Sushi: React.FC = () => {
  const { id } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const variant = Number(searchParams.get('variant'));

  const { isLoading, isError, isSuccess, data } = useGetSushiByIdQuery(id || '', {
    skip: !id,
  });

  const errorBlock = isError && <SushiBlockError />;
  const pending = isLoading && <SushiBlockLoading />;
  const succeeded = isSuccess && data && <SushiBlock {...data} variant={variant} />;

  return (
    <>
      {errorBlock}
      {pending}
      {succeeded}
    </>
  );
};

export default Sushi;
