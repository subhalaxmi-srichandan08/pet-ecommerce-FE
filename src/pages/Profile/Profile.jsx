import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import userService from "../../services/userService";
import useAuthStore from "../../store/authStore";

import "./Profile.css";

function Profile() {

    const user = useAuthStore(
        state => state.user
    );

    const setAuth = useAuthStore(
        state => state.setAuth
    );

    const [profile, setProfile] =
        useState(null);

    const [editing, setEditing] =
        useState(false);

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: ""
    });

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const res =
                    await userService.getProfile();

                const data =
                    res.data.data;

                setProfile(data);

                setForm({
                    firstName: data.firstName || "",
                    lastName: data.lastName || "",
                    phone: data.phone || ""
                });

            } catch (error) {

                console.error(error);

                toast.error(
                    error.response?.data?.message ||
                    "Failed to load profile"
                );

            } finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, []);

    const handleChange = e => {

        const {
            name,
            value
        } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));

    };

    const handleSave = async e => {

        e.preventDefault();

        if (
            !form.firstName.trim() ||
            !form.lastName.trim()
        ) {

            toast.error(
                "First name and last name are required."
            );

            return;

        }

        try {

            setSaving(true);

            const res =
                await userService.updateProfile({
                    firstName:
                        form.firstName.trim(),

                    lastName:
                        form.lastName.trim(),

                    phone:
                        form.phone.trim()
                });

            const updatedUser =
                res.data.data;

            setProfile(updatedUser);

            setForm({
                firstName:
                    updatedUser.firstName || "",

                lastName:
                    updatedUser.lastName || "",

                phone:
                    updatedUser.phone || ""
            });

            /*
             * Update Zustand so the Navbar
             * immediately reflects the new name.
             */
            setAuth(
                updatedUser,
                useAuthStore.getState().accessToken
            );

            setEditing(false);

            toast.success(
                "Profile updated successfully"
            );

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to update profile"
            );

        } finally {

            setSaving(false);

        }

    };

    const handleCancel = () => {

        if (!profile)
            return;

        setForm({
            firstName:
                profile.firstName || "",

            lastName:
                profile.lastName || "",

            phone:
                profile.phone || ""
        });

        setEditing(false);

    };

    if (loading) {

        return (
            <div className="profile-page container">
                <div className="profile-loading">
                    Loading profile...
                </div>
            </div>
        );

    }

    if (!profile) {

        return (
            <div className="profile-page container">
                <div className="profile-error">
                    Unable to load profile.
                </div>
            </div>
        );

    }

    return (

        <div className="profile-page container">

            <div className="profile-card">

                <div className="profile-header">

                    <div className="profile-avatar">

                        {profile.avatar ? (

                            <img
                                src={profile.avatar}
                                alt={profile.firstName}
                            />

                        ) : (

                            <span>
                                {profile.firstName
                                    ?.charAt(0)
                                    ?.toUpperCase()}
                            </span>

                        )}

                    </div>

                    <div>

                        <h1>
                            Profile
                        </h1>

                        <p>
                            Manage your personal information
                        </p>

                    </div>

                </div>

                {!editing ? (

                    <div className="profile-details">

                        <div className="profile-field">
                            <span>First Name</span>
                            <strong>
                                {profile.firstName}
                            </strong>
                        </div>

                        <div className="profile-field">
                            <span>Last Name</span>
                            <strong>
                                {profile.lastName}
                            </strong>
                        </div>

                        <div className="profile-field">
                            <span>Email</span>
                            <strong>
                                {profile.email}
                            </strong>
                        </div>

                        <div className="profile-field">
                            <span>Phone</span>
                            <strong>
                                {profile.phone || "Not added"}
                            </strong>
                        </div>

                        <button
                            className="profile-edit-btn"
                            onClick={() =>
                                setEditing(true)
                            }
                        >
                            Edit Profile
                        </button>

                    </div>

                ) : (

                    <form
                        className="profile-form"
                        onSubmit={handleSave}
                    >

                        <div className="form-row">

                            <div className="profile-input">

                                <label>
                                    First Name
                                </label>

                                <input
                                    name="firstName"
                                    value={
                                        form.firstName
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    maxLength={50}
                                />

                            </div>

                            <div className="profile-input">

                                <label>
                                    Last Name
                                </label>

                                <input
                                    name="lastName"
                                    value={
                                        form.lastName
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    maxLength={50}
                                />

                            </div>

                        </div>

                        <div className="profile-input">

                            <label>
                                Email
                            </label>

                            <input
                                value={
                                    profile.email
                                }
                                disabled
                            />

                            <small>
                                Email cannot be changed here.
                            </small>

                        </div>

                        <div className="profile-input">

                            <label>
                                Phone
                            </label>

                            <input
                                name="phone"
                                value={
                                    form.phone
                                }
                                onChange={
                                    handleChange
                                }
                                maxLength={20}
                                placeholder="Enter phone number"
                            />

                        </div>

                        <div className="profile-actions">

                            <button
                                type="button"
                                className="profile-cancel-btn"
                                onClick={
                                    handleCancel
                                }
                                disabled={saving}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="profile-save-btn"
                                disabled={saving}
                            >
                                {saving
                                    ? "Saving..."
                                    : "Save Changes"}
                            </button>

                        </div>

                    </form>

                )}

            </div>

        </div>

    );

}

export default Profile;