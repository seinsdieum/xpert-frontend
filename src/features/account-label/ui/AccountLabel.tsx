import { selectAccount } from '@/entities/auth';
import { IconLink } from '@/shared/ui';
import { HiPaperClip, HiUser } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const AccountLabel = () => {
    const authState = useSelector(selectAccount);
    return (
        <>
            {authState ? (
                <>
                    <HiPaperClip />
                    <p>{authState.username}</p>
                </>
            ) : (
                <IconLink icon={HiUser}></IconLink>
            )}
        </>
    );
};

export default AccountLabel;
