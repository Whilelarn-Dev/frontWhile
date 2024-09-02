import AxiosBuilder from './AxiosBuilder';
import { AxiosEnum } from '../enums/Axios';
import { useHandleErrorResponse } from '../hooks/useHandleErrorResponse';
import { useHandleSuccessResponse } from '../hooks/handleSuccessResponse';

function useAxios() {
  const handleSuccessResponse = useHandleSuccessResponse();
  const handleErrorResponse = useHandleErrorResponse();

  const buildAxios = new AxiosBuilder()
    .withBaseURL(AxiosEnum?.BASEURL)
    .withResponseType(AxiosEnum.RESPONSE_TYPE)
    .withTimeout(AxiosEnum.TIMEOUT)
    .withHeaders({ Accept: 'application/json' });

  const axios = buildAxios.build();

  axios.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

  return axios;
}

export default useAxios;
