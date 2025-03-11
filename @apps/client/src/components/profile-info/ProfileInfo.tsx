import { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { UserAuthStore } from '../../stores/authStore';
import { getUserDataService } from '../../services/authService';
import { profileInfoType} from '../../types/registerUserType';

function ProfileInfo (){
    const [userdata,SetUserData] = useState<profileInfoType>({})
    const token = UserAuthStore((state)=>state.token)

    useEffect(()=>{
        getUserDataService(token!,SetUserData)
    },[])

  return (
    <Card sx={{ maxWidth: 400, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Profile Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={500}>
              Username:
            </Typography>
            <Typography variant="body2">{userdata?.username}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={500}>
              Email:
            </Typography>
            <Typography variant="body2">{userdata?.email}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={500}>
              Mobile Number:
            </Typography>
            <Typography variant="body2">{userdata?.mobileNumber}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1" fontWeight={500}>
              Address:
            </Typography>
            <Typography variant="body2">{userdata?.address}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
