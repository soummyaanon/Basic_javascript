def three_sum(arr):
  for i in range(len(arr)-2):
    for j in range(i+1,len(arr)-1):
      for k in range(j+1,len(arr)):
        if arr[i] + arr[j] + arr[k] == 0:
          print(arr[i], arr[j], arr[k])
  if arr[i] + arr[j] + arr[k] != 0:
    print("no element found")
