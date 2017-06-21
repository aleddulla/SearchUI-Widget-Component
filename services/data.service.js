var clientDetails = [
  {
  "clientName":"Ann Liebmann","policyNumber":"0013983887 | 0013983887",
  "phone":"+27-61-453-5444","email":"ann.lieb@mail.com"
  },
  {
  "clientName":"Ann Summer","policyNumber":"0013983888 | 0013983888",
  "phone":"+27-61-453-5445","email":"ann.summer@mail.com"
  },
  {
  "clientName":"Anabelle Samuel","policyNumber":"0013983818 | 0013983818",
  "phone":"+27-61-453-5447","email":"sams.a@mail.com"
  },
  {
  "clientName":"Andy Roberts","policyNumber":"0013983800 | 0013983800",
  "phone":"+27-61-453-5448","email":"rob.097@maiil.com"
  },
  {
  "clientName":"Abdul Razak","policyNumber":"0013983801 | 0013983801",
  "phone":"+27-61-453-5449","email":"Raz.abdul@mail.com"
  },
  {
  "clientName":"Anbu Selvam","policyNumber":"0013983854 | 0013983854",
  "phone":"+27-61-453-5400","email":"rock.097@mail.com"
  },
  {
  "clientName":"Boss Sudakaran","policyNumber":"0013983855 | 0013983855",
  "phone":"+27-61-453-5401","email":"boss.097@mail.com"
  },
  {
  "clientName":"Bindhu Madhvi","policyNumber":"0013983856 | 0013983856",
  "phone":"+27-61-453-5402","email":"bindhu.4583@mail.com"
  },
  {
  "clientName":"Boysen Richard","policyNumber":"0013983857 | 0013983857",
  "phone":"+27-61-453-5400","email":"rich.boy@mail.com"
  },
  {
  "clientName":"Carrol Boysen","policyNumber":"0013983858 | 0013983858",
  "phone":"+27-61-453-5410","email":"camt.098@mail.com"
  },
  {
  "clientName":"Chandra Kumar","policyNumber":"0013983859 | 0013983859",
  "phone":"+27-61-453-5407","email":"chandra.097@mail.com"
  },
  {
  "clientName":"Daniel Balaji","policyNumber":"0013983840 | 0013983840",
  "phone":"+27-61-453-5409","email":"dan.b@mail.com"
  },
  {
  "clientName":"Syed Hussain","policyNumber":"0013983844 | 0013983844",
  "phone":"+27-61-453-5400","email":"syed.h@mail.com"
  },
  {
  "clientName":"Kaveri Selvam","policyNumber":"0013983841 | 0013983841",
  "phone":"+27-61-453-5400","email":"ksrm@mail.com"
  },
  {
  "clientName":"Hassan Ali","policyNumber":"0013983874 | 0013983874",
  "phone":"+27-61-453-5467","email":"Hassan.ali@mail.com"
  },
  {
  "clientName":"Jerry Thomson","policyNumber":"0013983833 | 0013983833",
  "phone":"+27-61-453-5490","email":"Jerry.kmd@mail.com"
  },
  {
  "clientName":"Mahe Rathinam","policyNumber":"0013983838 | 0013983838",
  "phone":"+27-61-453-5480","email":"mahi.rio@mail.com"
  },
  {
  "clientName":"Mahela Kumar","policyNumber":"0013983835 | 0013983835",
  "phone":"+27-61-453-5410","email":"mahi.kumar@mail.com"
  },
  {
  "clientName":"Zara Afzan","policyNumber":"0013983836 | 0013983836",
  "phone":"+27-61-453-5420","email":"zara.aftj@mail.com"
  },
  {
  "clientName":"Jafer Ali","policyNumber":"0013983832 | 0013983832",
  "phone":"+27-61-453-5430","email":"Jafer.097@mail.com"
  },
  {
  "clientName":"Joe Jacob","policyNumber":"0013983610 | 0013983610",
  "phone":"+27-61-453-5110","email":"j.jacob@mail.com"
  },
  {
  "clientName":"Paul Hendry","policyNumber":"0013983620 | 0013983620",
  "phone":"+27-61-453-5120","email":"paul.097@mail.com"
  }
]

angular.module('myApp').factory('dataUtils', function(){	
		return {
			filterData: function(item,value){
			  if(value === '' || value === undefined){return []}
				if(Array.isArray(clientDetails)){
					return clientDetails.filter(function(curObj){
						if(Array.isArray(item)){
							for(var field of item){
							  if((curObj[field]).toUpperCase().indexOf(value.toUpperCase()) >= 0){
							    return true;
							  }
							}
						}else{
							return (curObj[item]).toUpperCase().indexOf(value.toUpperCase())>=0;
						}
					})
				}
			}
		}
});