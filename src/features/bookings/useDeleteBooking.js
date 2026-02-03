import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  // to get the queryClient so that we can invalidate the data
  const queryClient = useQueryClient();

  const { isPending: isDeletingBooking, mutate: deleteBookng } = useMutation({
    mutationFn: deleteBookingApi,
    // Auto refetch after deleting
    onSuccess: () => {
      toast.success("Booking has been deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeletingBooking, deleteBookng };
}
