#x=input("Enter the number you want to check for Prime")
def Prime(n):
	z=int(n/2)
	flag=0
	for i in range(2,z+1):
		if(n%i==0):
			flag=1
			break
		else:	
			flag=0
	return flag


x=input("Enter the number you want to check for Prime")
c=Prime(int(x))
if(c==0):
	print("Prime")
else:
	print("Not prime")

