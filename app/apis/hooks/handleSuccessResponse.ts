import { useQueryClient } from '@tanstack/react-query';
import { AxiosEnum, AxiosQueryEnum } from '../enums/Axios';
import { AxiosResponse } from 'axios';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const useHandleSuccessResponse = () => {
  const queryClient = useQueryClient();

  const handleSuccessResponse = useCallback(
    (
      response: AxiosResponse<any, any>,
    ): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> => {
      const responseMsg = response?.data?.message;
      const method = response.config.method;
      const key = response.config.headers[AxiosEnum?.HEADER_KEY];
      const ResponseMessage =
        responseMsg ||'validation.the_possess_done_successful';

        console.log(key);
      if (method !== AxiosQueryEnum?.GET) {
        
        queryClient.invalidateQueries({
          queryKey:[key]
        });
        toast.success(ResponseMessage);
        // setValidation([{}]);
      }

      return response;
    },
    [queryClient],
  );

  return handleSuccessResponse;
};
